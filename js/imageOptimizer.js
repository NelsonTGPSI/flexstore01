// ============================================================================
// Image Optimizer - Lazy Loading com Intersection Observer
// ============================================================================

class ImageOptimizer {
  constructor() {
    this.imageObserver = null;
    this.init();
  }

  init() {
    // Detector de capacidade WebP
    this.supportsWebP = this.checkWebPSupport();
    
    // Configurar Intersection Observer para lazy loading
    this.setupLazyLoading();
    
    // Otimizar imagens já carregadas
    this.optimizeLoadedImages();
  }

  // Verificar suporte a WebP
  checkWebPSupport() {
    try {
      const canvas = document.createElement('canvas');
      return canvas.toDataURL('image/webp').indexOf('image/webp') === 5;
    } catch (err) {
      return false;
    }
  }

  // Configurar Intersection Observer
  setupLazyLoading() {
    const options = {
      root: null,
      rootMargin: '50px', // Começar a carregar 50px antes de aparecer
      threshold: 0.01
    };

    this.imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          this.loadImage(img);
          this.imageObserver.unobserve(img);
        }
      });
    }, options);

    // Observar todas as imagens com data-src
    document.querySelectorAll('img[data-src]').forEach(img => {
      this.imageObserver.observe(img);
    });
  }

  // Carregar imagem com otimizações
  loadImage(img) {
    const src = img.dataset.src;
    if (!src) return;

    // Adicionar classe de carregamento
    img.classList.add('img-loading');

    // Preload para melhor performance
    const tempImg = new Image();
    
    tempImg.onload = () => {
      img.src = src;
      img.classList.remove('img-loading');
      img.classList.add('img-loaded');
      
      // Remover atributo data-src após carregar
      img.removeAttribute('data-src');
    };

    tempImg.onerror = () => {
      img.classList.remove('img-loading');
      img.classList.add('img-error');
      console.warn(`Falha ao carregar imagem: ${src}`);
    };

    tempImg.src = src;
  }

  // Otimizar imagens já presentes no DOM
  optimizeLoadedImages() {
    document.querySelectorAll('img:not([data-src])').forEach(img => {
      // Adicionar atributo loading="lazy" se não tiver
      if (!img.hasAttribute('loading')) {
        img.loading = 'lazy';
      }

      // Adicionar dimensões para evitar layout shift
      if (!img.hasAttribute('width') && !img.hasAttribute('height')) {
        img.style.aspectRatio = '1 / 1';
      }
    });
  }

  // Converter src para WebP se suportado
  static getOptimizedSrc(src) {
    if (!src) return src;
    
    // Se já é WebP, retornar como está
    if (src.includes('.webp')) return src;
    
    // Se é JPEG/PNG, converter para WebP
    if (src.match(/\.(jpg|jpeg|png)$/i)) {
      return src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    }
    
    return src;
  }

  // Pré-carregar imagens críticas
  static preloadCriticalImages(srcs) {
    srcs.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }

  // Prefetch para imagens de próximas categorias
  static prefetchNextCategory(srcs) {
    srcs.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }
}

// Inicializar quando DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ImageOptimizer();
  });
} else {
  new ImageOptimizer();
}

// Exportar para uso no script.js
window.ImageOptimizer = ImageOptimizer;
