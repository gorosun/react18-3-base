module.exports = {
  hooks: {
    readPackage(pkg) {
      const dependenciesToUpdate = {
        '@humanwhocodes/config-array': '0.14.0',
        '@humanwhocodes/object-schema': '2.1.0',
        glob: '9.2.0',
        inflight: '1.0.7',
        rimraf: '4.1.2',
      };

      // Check all types of dependencies
      ['dependencies', 'devDependencies', 'optionalDependencies'].forEach(
        (depType) => {
          if (pkg[depType]) {
            Object.keys(dependenciesToUpdate).forEach((dep) => {
              if (pkg[depType][dep]) {
                pkg[depType][dep] = dependenciesToUpdate[dep];
              }
            });
          }
        }
      );

      return pkg;
    },
  },
};
