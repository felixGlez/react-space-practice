import { useState } from 'react';

export const useTabs = () => {
	const [tabs, setTabs] = useState(0);

	const handleTabs = index => {
		setTabs(index);
	};

	return [tabs, handleTabs];
};
