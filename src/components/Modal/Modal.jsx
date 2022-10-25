import {useEffect} from "react";
import { createPortal } from "react-dom";

import s from "./modal.module.css";

const modal = document.getElementById('root-modal');
const Modal = ({ children, closeModal }) => {
    useEffect(() => {
        document.addEventListener('keydown', handleClose);
        return () => {
            document.removeEventListener('keydown', handleClose)
        };
    });

    const handleClose = e => {
        if (e.target === e.currentTarget) {
            closeModal();
            return;
        }
        if (e.code === "Escape") {
            closeModal();
        }
    };

    return createPortal(
        <div className={s.overlay} onClick={handleClose}>
            <div className={s.modal}>{children}</div>
        </div>,
        modal
    );
};

// class Modal extends Component {

//     componentDidMount() {
//     document.addEventListener('keydown', this.handleClose)
//     }

//     componentWillUnmount() {
//         document.removeEventListener("keydown", this.handleClose);
//     }

//     handleClose = e => {
//         const { closeModal } = this.props;
//             if(e.target === e.currentTarget) {
//                 closeModal();
//                 return;
//             }
//             if (e.code === "Escape") {
//                 closeModal();
//             }
//         }

//     render() {
//         const { children } = this.props;
//         const { handleClose } = this;

//         return createPortal(
//       <div className={s.overlay} onClick={handleClose}>
//         <div className={s.modal}>{children}</div>
//       </div>,
//       modal
//     );
//     }
// }

export default Modal;