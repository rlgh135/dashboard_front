import { useEffect, useState } from "react"

const Toast = ({message, type='success', duration = 3000, onClose}) => {
    const [visiable, setVisiable] = useState(true);

    useEffect(()=> {
        const timer = setTimeout(()=> {
            setVisiable(false);
            onClose?.();
        }, duration);
        
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if(!visiable) {
        return null;
    }

    const bgColor = type == 'error' ? 'bg-red-500' : 'bg-green-500';

    return (
        <div className={`fixed bottom-6 right-6 px-4 py-3 text-white rounded shadow-lg ${bgColor} transition-all`}>
            {message}
        </div>
    );
}

export default Toast