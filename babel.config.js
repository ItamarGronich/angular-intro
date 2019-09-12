module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "corejs": 2,
        "targets": "last 2 versions, ie 11",
        "useBuiltIns": "entry"
      }
    ]
  ],

  plugins: [
     ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
}
