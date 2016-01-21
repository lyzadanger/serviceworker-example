'use strict';

self.addEventListener('install', event => {
  function onInstall () {
    return caches.open('static')
      .then(cache =>
        cache.addAll([
          '/images/lyza.gif',
          '/js/site.js',
          '/css/styles.css',
          '/offline/',
          '/'
        ])
      );
  }

  event.waitUntil(onInstall(event));
});

self.addEventListener('activate', event => {

});
