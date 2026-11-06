import 'katex/dist/katex.min.css';
import './styles/main.css';
import { SolutionExplorerApp } from './ui/appShell';

const appRoot = document.querySelector<HTMLElement>('#app');
if (!appRoot) {
  throw new Error('Missing #app mount container');
}

new SolutionExplorerApp(appRoot);
