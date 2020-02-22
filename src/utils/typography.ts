import Typography from 'typography';
import GithubTheme from 'typography-theme-github';

delete GithubTheme.googleFonts;

GithubTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1,h2': {
    borderBottom: 'none'
  }
});

const typography = new Typography(GithubTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const { rhythm } = typography;
export const { scale } = typography;
