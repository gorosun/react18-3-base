module.exports = {
  hooks: {
    readPackage(pkg) {
      // サブ依存関係のバージョンを上書き
      if (pkg.dependencies) {
        if (pkg.dependencies['@humanwhocodes/config-array']) {
          pkg.dependencies['@humanwhocodes/config-array'] = '0.14.0';
        }
        if (pkg.dependencies['@humanwhocodes/object-schema']) {
          pkg.dependencies['@humanwhocodes/object-schema'] = '2.1.0';
        }
        if (pkg.dependencies['glob']) {
          pkg.dependencies['glob'] = '9.2.0';
        }
        if (pkg.dependencies['inflight']) {
          pkg.dependencies['inflight'] = '1.0.7';
        }
        if (pkg.dependencies['rimraf']) {
          pkg.dependencies['rimraf'] = '4.1.2';
        }
      }
      return pkg;
    },
  },
};
