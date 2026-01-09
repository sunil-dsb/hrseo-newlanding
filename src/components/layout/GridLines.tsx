'use client';

import { m } from 'framer-motion';

export function GridLines() {
    return (
        <div className="fixed inset-0 flex justify-center pointer-events-none z-0 select-none" aria-hidden="true">
            <div className="w-full h-full max-w-5xl grid grid-cols-3">
                {[0, 1, 2].map((index) => (
                    <m.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={{ height: '100%' }}
                        transition={{
                            duration: 2.5,
                            delay: 0.2 + index * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`relative h-full ${index === 0 ? 'border-l border-black/6' : ''} ${index === 2 ? 'border-r border-black/6' : ''}`}
                    >
                        {(index === 0 || index === 1) && (
                            <div className="absolute right-0 top-0 h-full flex translate-x-1/2 select-none">
                                <div className="border-r h-full border-black/6"></div>
                                <div className="w-3"></div>
                                <div className="border-r h-full border-black/5"></div>
                            </div>
                        )}
                    </m.div>
                ))}
            </div>
        </div>
    );
}
