import { useState, useEffect } from 'react'

const RenderOnce = (cb) => {
	const [hasRendered, setHasRendered] = useState(false);
	
	useEffect(() => setHasRendered(true), [hasRendered])
	
	if (!hasRendered) {
		cb();
	}
}

export default RenderOnce;