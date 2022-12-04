// purely exists because of nx...
// https://github.com/nrwl/nx/issues/10565
// https://github.com/nrwl/nx/issues/11335
// https://github.com/nrwl/nx/pull/10414

module.exports = (config, _context) => ({
  ...config,
  experiments: {
    ...config.experiments,
    // outputModule: true,
    topLevelAwait: true,
  },
  // output: {
  //   path: config.output.path,
  //   chunkFormat: 'module',
  //   library: {
  //     type: 'module',
  //   },
  // },
})
