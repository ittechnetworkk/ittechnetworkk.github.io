// Image Optimization and Lazy Loading
class ImageOptimizer {
  constructor() {
    this.supportsWebP = false;
    this.intersectionObserver = null;
    this.lazyImages = [];
    
    this.init();
  }

  async init() {
    // Check WebP support
    await this.checkWebPSupport();
    
    // Setup lazy loading
    this.setupLazyLoading();
    
    // Optimize existing images
    this.optimizeExistingImages();
    
    // Add responsive image handling
    this.handleResponsiveImages();
    
    // Setup image error handling
    this.setupImageErrorHandling();
  }

  // Check if browser supports WebP
  async checkWebPSupport() {
    try {
      const webpData = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
      const img = new Image();
      
      return new Promise((resolve) => {
        img.onload = () => {
          this.supportsWebP = img.width === 2 && img.height === 2;
          console.log('WebP support:', this.supportsWebP);
          resolve(this.supportsWebP);
        };
        img.onerror = () => {
          this.supportsWebP = false;
          resolve(false);
        };
        img.src = webpData;
      });
    } catch (error) {
      console.warn('WebP support check failed:', error);
      this.supportsWebP = false;
      return false;
    }
  }

  // Setup Intersection Observer for lazy loading
  setupLazyLoading() {
    if ('IntersectionObserver' in window) {
      this.intersectionObserver = new IntersectionObserver(
        this.handleIntersection.bind(this),
        {
          root: null,
          rootMargin: '50px',
          threshold: 0.1
        }
      );

      // Observe all images with data-src
      this.observeImages();
      
      // Setup mutation observer for dynamically added images
      this.setupMutationObserver();
    } else {
      // Fallback for browsers without Intersection Observer
      this.loadAllImages();
    }
  }

  observeImages() {
    const lazyImages = document.querySelectorAll('img[data-src], img[loading="lazy"]');
    
    lazyImages.forEach(img => {
      // Add lazy loading class
      img.classList.add('lazy-image');
      
      // Observe the image
      if (this.intersectionObserver) {
        this.intersectionObserver.observe(img);
      }
      
      this.lazyImages.push(img);
    });
  }

  setupMutationObserver() {
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Element node
            // Check if the node itself is an image
            if (node.tagName === 'IMG' && (node.hasAttribute('data-src') || node.hasAttribute('loading'))) {
              node.classList.add('lazy-image');
              this.intersectionObserver?.observe(node);
            }
            
            // Check for images within the node
            const images = node.querySelectorAll?.('img[data-src], img[loading="lazy"]');
            images?.forEach(img => {
              img.classList.add('lazy-image');
              this.intersectionObserver?.observe(img);
            });
          }
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        this.loadImage(img);
        this.intersectionObserver.unobserve(img);
      }
    });
  }

  loadImage(img) {
    // Get the source URL
    let src = img.dataset.src || img.src;
    
    // Convert to WebP if supported
    if (this.supportsWebP && src) {
      src = this.convertToWebP(src);
    }
    
    // Create a new image to preload
    const imageLoader = new Image();
    
    imageLoader.onload = () => {
      // Add fade-in effect
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.3s ease-in-out';
      
      // Set the source
      img.src = src;
      
      // Remove data-src attribute
      img.removeAttribute('data-src');
      
      // Add loaded class and fade in
      img.classList.add('loaded');
      
      setTimeout(() => {
        img.style.opacity = '1';
      }, 10);
      
      // Remove lazy loading class
      img.classList.remove('lazy-image');
    };
    
    imageLoader.onerror = () => {
      // Fallback to original source on error
      img.src = img.dataset.src || img.src;
      img.classList.add('error');
      console.warn('Image failed to load:', src);
    };
    
    // Start loading
    imageLoader.src = src;
  }

  convertToWebP(src) {
    // Check if image is already WebP
    if (src.includes('.webp')) {
      return src;
    }
    
    // Convert common image formats to WebP
    const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    
    // Only convert if the WebP version might exist
    if (webpSrc !== src) {
      return webpSrc;
    }
    
    return src;
  }

  loadAllImages() {
    // Fallback for browsers without Intersection Observer
    this.lazyImages.forEach(img => {
      this.loadImage(img);
    });
  }

  optimizeExistingImages() {
    const images = document.querySelectorAll('img:not([data-src]):not(.lazy-image)');
    
    images.forEach(img => {
      // Add responsive image attributes if missing
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add appropriate sizing
      if (!img.hasAttribute('sizes') && img.hasAttribute('srcset')) {
        img.setAttribute('sizes', '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw');
      }
      
      // Optimize image display
      this.optimizeImageDisplay(img);
    });
  }

  optimizeImageDisplay(img) {
    // Prevent layout shift
    if (!img.style.aspectRatio && img.naturalWidth && img.naturalHeight) {
      img.style.aspectRatio = `${img.naturalWidth}/${img.naturalHeight}`;
    }
    
    // Add object-fit for better scaling
    if (!img.style.objectFit) {
      img.style.objectFit = 'cover';
    }
    
    // Optimize image rendering
    img.style.imageRendering = 'auto';
    
    // Add transition for smooth loading
    if (!img.style.transition) {
      img.style.transition = 'opacity 0.3s ease-in-out';
    }
  }

  handleResponsiveImages() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      // Create responsive srcset if not exists
      if (!img.hasAttribute('srcset') && img.src) {
        this.createResponsiveSrcset(img);
      }
    });
  }

  createResponsiveSrcset(img) {
    const src = img.src;
    const basePath = src.substring(0, src.lastIndexOf('.'));
    const extension = src.substring(src.lastIndexOf('.'));
    
    // Generate srcset for different screen sizes
    const sizes = [320, 640, 768, 1024, 1280, 1920];
    const srcset = sizes.map(size => {
      return `${basePath}-${size}w${extension} ${size}w`;
    }).join(', ');
    
    // Only add if responsive images might exist
    if (srcset) {
      img.setAttribute('srcset', srcset);
      img.setAttribute('sizes', '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw');
    }
  }

  setupImageErrorHandling() {
    document.addEventListener('error', (e) => {
      if (e.target.tagName === 'IMG') {
        const img = e.target;
        
        // Try fallback formats
        if (img.src.includes('.webp')) {
          // Fallback to original format
          const fallbackSrc = img.src.replace('.webp', '.jpg');
          img.src = fallbackSrc;
          return;
        }
        
        // Add error styling
        img.classList.add('image-error');
        img.style.background = '#f0f0f0';
        img.style.display = 'flex';
        img.style.alignItems = 'center';
        img.style.justifyContent = 'center';
        img.style.color = '#666';
        img.style.fontSize = '0.8rem';
        
        // Add error icon or text
        if (!img.alt) {
          img.alt = 'Image failed to load';
        }
      }
    }, true);
  }

  // Public methods
  addImage(img) {
    if (this.intersectionObserver) {
      img.classList.add('lazy-image');
      this.intersectionObserver.observe(img);
    } else {
      this.loadImage(img);
    }
  }

  preloadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = this.supportsWebP ? this.convertToWebP(src) : src;
    });
  }

  preloadImages(urls) {
    return Promise.all(urls.map(url => this.preloadImage(url)));
  }

  // Performance monitoring
  measureImagePerformance() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.initiatorType === 'img') {
            console.log(`Image ${entry.name} loaded in ${entry.duration}ms`);
          }
        });
      });
      
      observer.observe({ entryTypes: ['resource'] });
    }
  }
}

// Image compression utility
class ImageCompressor {
  static compress(file, quality = 0.8, maxWidth = 1920, maxHeight = 1080) {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        // Calculate new dimensions
        let { width, height } = img;
        
        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }
        
        if (height > maxHeight) {
          width = (width * maxHeight) / height;
          height = maxHeight;
        }
        
        // Set canvas size
        canvas.width = width;
        canvas.height = height;
        
        // Draw and compress
        ctx.drawImage(img, 0, 0, width, height);
        
        canvas.toBlob(resolve, 'image/jpeg', quality);
      };
      
      img.src = URL.createObjectURL(file);
    });
  }
}

// CSS for image optimization
const imageOptimizationCSS = `
  .lazy-image {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  
  .lazy-image.loaded {
    opacity: 1;
  }
  
  .image-error {
    background: #f0f0f0 !important;
    color: #666 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    min-height: 100px;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  /* Skeleton loading effect */
  .lazy-image:not(.loaded) {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: skeleton-loading 1.5s infinite;
  }
  
  @keyframes skeleton-loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`;

// Add CSS to document
if (!document.querySelector('#image-optimization-css')) {
  const style = document.createElement('style');
  style.id = 'image-optimization-css';
  style.textContent = imageOptimizationCSS;
  document.head.appendChild(style);
}

// Initialize image optimizer when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.imageOptimizer = new ImageOptimizer();
  
  // Enable performance monitoring in development
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.imageOptimizer.measureImagePerformance();
  }
});

// Export for external use
window.ImageOptimizer = ImageOptimizer;
window.ImageCompressor = ImageCompressor; 