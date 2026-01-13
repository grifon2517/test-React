import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Pril from './Pril.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Pril />
	</StrictMode>,
);
