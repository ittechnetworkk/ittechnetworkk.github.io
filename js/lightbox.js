// Enhanced Lightbox functionality for image zoom
document.addEventListener('DOMContentLoaded', function() {
    // Create lightbox elements with enhanced UI
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-overlay"></div>
        <div class="lightbox-content">
            <div class="lightbox-header">
                <div class="lightbox-title"></div>
                <div class="lightbox-actions">
                    <button class="lightbox-fullscreen" title="Toggle Fullscreen">
                        <i class="fas fa-expand"></i>
                    </button>
                    <button class="lightbox-download" title="Download Image">
                        <i class="fas fa-download"></i>
                    </button>
                    <button class="lightbox-close" title="Close (Esc)">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <div class="lightbox-image-container">
                <div class="lightbox-image-wrapper">
                    <img class="lightbox-image" src="" alt="">
                </div>
                <div class="lightbox-loading">
                    <div class="loading-spinner"></div>
                    <div class="loading-text">Loading...</div>
                </div>
            </div>
            <div class="lightbox-footer">
                <div class="lightbox-caption"></div>
                <div class="lightbox-zoom-info">
                    <span class="zoom-level">100%</span>
                </div>
            </div>
            <div class="lightbox-controls">
                <button class="lightbox-zoom-in" title="Zoom In (+)">
                    <i class="fas fa-search-plus"></i>
                </button>
                <button class="lightbox-zoom-out" title="Zoom Out (-)">
                    <i class="fas fa-search-minus"></i>
                </button>
                <button class="lightbox-reset" title="Reset Zoom (0)">
                    <i class="fas fa-expand-arrows-alt"></i>
                </button>
                <button class="lightbox-rotate" title="Rotate (R)">
                    <i class="fas fa-redo"></i>
                </button>
            </div>
            <div class="lightbox-navigation">
                <button class="lightbox-prev" title="Previous Image (←)">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="lightbox-next" title="Next Image (→)">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(lightbox);

    // Get lightbox elements
    const lightboxOverlay = lightbox.querySelector('.lightbox-overlay');
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxImageContainer = lightbox.querySelector('.lightbox-image-container');
    const lightboxImageWrapper = lightbox.querySelector('.lightbox-image-wrapper');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const lightboxTitle = lightbox.querySelector('.lightbox-title');
    const lightboxLoading = lightbox.querySelector('.lightbox-loading');
    const zoomLevel = lightbox.querySelector('.zoom-level');
    
    // Control buttons
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const zoomInBtn = lightbox.querySelector('.lightbox-zoom-in');
    const zoomOutBtn = lightbox.querySelector('.lightbox-zoom-out');
    const resetBtn = lightbox.querySelector('.lightbox-reset');
    const rotateBtn = lightbox.querySelector('.lightbox-rotate');
    const fullscreenBtn = lightbox.querySelector('.lightbox-fullscreen');
    const downloadBtn = lightbox.querySelector('.lightbox-download');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');

    let currentZoom = 1;
    let currentRotation = 0;
    let isDragging = false;
    let dragStartX, dragStartY;
    let imageOffsetX = 0, imageOffsetY = 0;
    let images = [];
    let currentImageIndex = 0;
    let isFullscreen = false;

    // Enhanced image detection and setup
    function initializeImages() {
        images = Array.from(document.querySelectorAll('img:not(.lightbox-image):not(.no-lightbox)'))
            .filter(img => !img.closest('a') && img.complete && img.naturalWidth > 0);
        
        images.forEach((img, index) => {
            img.style.cursor = 'pointer';
            img.dataset.lightboxIndex = index;
            
            // Enhanced hover effect
            img.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.02)';
                this.style.transition = 'all 0.3s ease';
                this.style.filter = 'brightness(1.1)';
                this.style.boxShadow = '0 4px 15px rgba(43, 188, 138, 0.3)';
            });
            
            img.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.filter = 'brightness(1)';
                this.style.boxShadow = 'none';
            });
            
            img.addEventListener('click', function() {
                openLightbox(parseInt(this.dataset.lightboxIndex));
            });
        });
    }

    function openLightbox(imageIndex) {
        currentImageIndex = imageIndex;
        const img = images[imageIndex];
        
        // Show loading
        lightboxLoading.style.display = 'flex';
        lightboxImage.style.opacity = '0';
        
        // Set image info
        lightboxTitle.textContent = `Image ${imageIndex + 1} of ${images.length}`;
        lightboxCaption.textContent = img.alt || img.title || 'No description available';
        
        // Load image
        const tempImage = new Image();
        tempImage.onload = function() {
            lightboxImage.src = this.src;
            lightboxImage.alt = img.alt;
            lightboxLoading.style.display = 'none';
            lightboxImage.style.opacity = '1';
        };
        tempImage.src = img.src;
        
        // Show lightbox
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Reset transformations
        resetTransformations();
        updateNavigationButtons();
        
        // Auto-hide controls after 3 seconds
        setTimeout(hideControls, 3000);
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
        resetTransformations();
        if (isFullscreen && document.exitFullscreen) {
            document.exitFullscreen();
        }
    }

    function resetTransformations() {
        currentZoom = 1;
        currentRotation = 0;
        imageOffsetX = 0;
        imageOffsetY = 0;
        updateImageTransform();
        updateZoomLevel();
    }

    function updateImageTransform() {
        const transform = `translate(${imageOffsetX}px, ${imageOffsetY}px) scale(${currentZoom}) rotate(${currentRotation}deg)`;
        lightboxImageWrapper.style.transform = transform;
        
        // Update cursor based on zoom level
        if (currentZoom > 1) {
            lightboxImage.style.cursor = isDragging ? 'grabbing' : 'grab';
        } else {
            lightboxImage.style.cursor = 'default';
        }
    }

    function updateZoomLevel() {
        zoomLevel.textContent = Math.round(currentZoom * 100) + '%';
    }

    function updateNavigationButtons() {
        prevBtn.style.display = images.length > 1 ? 'flex' : 'none';
        nextBtn.style.display = images.length > 1 ? 'flex' : 'none';
        prevBtn.disabled = currentImageIndex === 0;
        nextBtn.disabled = currentImageIndex === images.length - 1;
    }

    function hideControls() {
        lightbox.classList.add('controls-hidden');
    }

    function showControls() {
        lightbox.classList.remove('controls-hidden');
    }

    function constrainImagePosition() {
        if (currentZoom <= 1) {
            imageOffsetX = 0;
            imageOffsetY = 0;
            return;
        }

        const containerRect = lightboxImageContainer.getBoundingClientRect();
        const imageRect = lightboxImage.getBoundingClientRect();
        
        const scaledWidth = imageRect.width * currentZoom;
        const scaledHeight = imageRect.height * currentZoom;
        
        const maxOffsetX = Math.max(0, (scaledWidth - containerRect.width) / 2);
        const maxOffsetY = Math.max(0, (scaledHeight - containerRect.height) / 2);
        
        imageOffsetX = Math.max(-maxOffsetX, Math.min(maxOffsetX, imageOffsetX));
        imageOffsetY = Math.max(-maxOffsetY, Math.min(maxOffsetY, imageOffsetY));
    }

    // Event listeners
    closeBtn.addEventListener('click', closeLightbox);
    lightboxOverlay.addEventListener('click', closeLightbox);

    // Zoom controls
    zoomInBtn.addEventListener('click', function() {
        currentZoom = Math.min(currentZoom * 1.25, 5);
        constrainImagePosition();
        updateImageTransform();
        updateZoomLevel();
    });

    zoomOutBtn.addEventListener('click', function() {
        currentZoom = Math.max(currentZoom / 1.25, 0.25);
        constrainImagePosition();
        updateImageTransform();
        updateZoomLevel();
    });

    resetBtn.addEventListener('click', resetTransformations);

    rotateBtn.addEventListener('click', function() {
        currentRotation += 90;
        if (currentRotation >= 360) currentRotation = 0;
        updateImageTransform();
    });

    // Navigation
    prevBtn.addEventListener('click', function() {
        if (currentImageIndex > 0) {
            openLightbox(currentImageIndex - 1);
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentImageIndex < images.length - 1) {
            openLightbox(currentImageIndex + 1);
        }
    });

    // Fullscreen toggle
    fullscreenBtn.addEventListener('click', function() {
        if (!isFullscreen) {
            if (lightbox.requestFullscreen) {
                lightbox.requestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    });

    // Download functionality
    downloadBtn.addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = lightboxImage.src;
        link.download = lightboxImage.alt || 'image';
        link.click();
    });

    // Enhanced drag functionality - works on both image and container
    function startDrag(e) {
        if (currentZoom > 1) {
            isDragging = true;
            dragStartX = e.clientX || e.touches[0].clientX;
            dragStartY = e.clientY || e.touches[0].clientY;
            updateImageTransform();
            e.preventDefault();
        }
    }

    function doDrag(e) {
        if (!isDragging || currentZoom <= 1) return;
        
        e.preventDefault();
        const clientX = e.clientX || e.touches[0].clientX;
        const clientY = e.clientY || e.touches[0].clientY;
        
        const deltaX = clientX - dragStartX;
        const deltaY = clientY - dragStartY;
        
        imageOffsetX += deltaX;
        imageOffsetY += deltaY;
        
        constrainImagePosition();
        updateImageTransform();
        
        dragStartX = clientX;
        dragStartY = clientY;
    }

    function endDrag() {
        isDragging = false;
        updateImageTransform();
    }

    // Mouse events
    lightboxImageContainer.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', doDrag);
    document.addEventListener('mouseup', endDrag);

    // Touch events for mobile
    lightboxImageContainer.addEventListener('touchstart', startDrag);
    document.addEventListener('touchmove', doDrag);
    document.addEventListener('touchend', endDrag);

    // Mouse wheel zoom with smooth animation
    lightbox.addEventListener('wheel', function(e) {
        if (e.target.closest('.lightbox-image-container')) {
            e.preventDefault();
            const delta = e.deltaY > 0 ? 0.9 : 1.1;
            const oldZoom = currentZoom;
            currentZoom = Math.min(Math.max(currentZoom * delta, 0.25), 5);
            
            // Zoom towards mouse position
            const rect = lightboxImageContainer.getBoundingClientRect();
            const mouseX = e.clientX - rect.left - rect.width / 2;
            const mouseY = e.clientY - rect.top - rect.height / 2;
            
            const zoomRatio = currentZoom / oldZoom;
            imageOffsetX = mouseX + (imageOffsetX - mouseX) * zoomRatio;
            imageOffsetY = mouseY + (imageOffsetY - mouseY) * zoomRatio;
            
            constrainImagePosition();
            updateImageTransform();
            updateZoomLevel();
        }
    });

    // Show controls on mouse movement
    lightbox.addEventListener('mousemove', function() {
        showControls();
        clearTimeout(this.hideTimeout);
        this.hideTimeout = setTimeout(hideControls, 3000);
    });

    // Enhanced keyboard controls
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case '+':
            case '=':
                zoomInBtn.click();
                break;
            case '-':
                zoomOutBtn.click();
                break;
            case '0':
                resetBtn.click();
                break;
            case 'r':
            case 'R':
                rotateBtn.click();
                break;
            case 'ArrowLeft':
                prevBtn.click();
                break;
            case 'ArrowRight':
                nextBtn.click();
                break;
            case 'f':
            case 'F':
                fullscreenBtn.click();
                break;
            case 'd':
            case 'D':
                downloadBtn.click();
                break;
        }
    });

    // Fullscreen change detection
    document.addEventListener('fullscreenchange', function() {
        isFullscreen = !!document.fullscreenElement;
        fullscreenBtn.innerHTML = isFullscreen ? 
            '<i class="fas fa-compress"></i>' : 
            '<i class="fas fa-expand"></i>';
    });

    // Touch support for mobile navigation
    let touchStartX, touchStartY;
    let touchTime;
    
    lightbox.addEventListener('touchstart', function(e) {
        if (currentZoom <= 1) {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            touchTime = Date.now();
        }
    });

    lightbox.addEventListener('touchend', function(e) {
        if (!touchStartX || !touchStartY || currentZoom > 1) return;
        
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const diffX = touchStartX - touchEndX;
        const diffY = touchStartY - touchEndY;
        const timeDiff = Date.now() - touchTime;
        
        // Only trigger swipe if it's a quick gesture and primarily horizontal
        if (timeDiff < 300 && Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            if (diffX > 0) {
                nextBtn.click(); // Swipe left - next image
            } else {
                prevBtn.click(); // Swipe right - previous image
            }
        }
        
        touchStartX = touchStartY = null;
    });

    // Initialize images when DOM is ready
    initializeImages();
    
    // Re-initialize when new content is loaded (for dynamic content)
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                setTimeout(initializeImages, 100);
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}); 