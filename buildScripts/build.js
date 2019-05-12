import webpack from 'webpack';
import chalk from 'chalk';
import webpackConfig from '../webpack.config.prod';

process.env.NODE_ENV = 'production';
/* eslint-disable no-console */
console.log(chalk.blue('Generating minified bundle for protection. This will take a moment...'));

webpack(webpackConfig).run((err, stats) => {
  if(err){ //so a fatal error occured
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors){ //Hatalari goruntulemek icin
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

  if(jsonStats.hasWarnings){ //Uyarilari goruntulemek icin
    console.log(chalk.yellow('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
  }

  console.log('Webpack stats: ', stats);
  //if we got this far, the build succeeded
  console.log(chalk.green('Your app has been built for production and written to /dist folder'));

  return 0;
});

