import { recipe } from "@vanilla-extract/recipes";


export const sidebar = recipe({
    base: {
    transition:'0.5s',
    height: '100%',
    width: '100%',
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    zIndex: '1',
    pointerEvents: 'none',
    },
    variants: {
        type: {
            active: {
                pointerEvents: 'auto',
                backgroundColor: 'rgba(0,0,0,0.5)',
            },
            inactive: {
                pointerEvents: 'none',
                backgroundColor: 'rgba(0,0,0,0)',
            }
        }
    }
})