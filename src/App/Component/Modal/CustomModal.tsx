import React from "react";

interface CustomModalProps {
    type: "Success" | "Info" | "Warning" | "Danger";
    title: string;
    content: string;
    is_show: boolean;
    onClose: () => void;
    onButtonClick: () => void;
}

export const CustomModal: React.FC<CustomModalProps> = ({ type, title, content, is_show, onClose, onButtonClick }): any => {
    const modalId = `${type.toLowerCase()}-alert-modal`;

    // Handle closing the modal
    const handleClose = () => {
        onClose();
    };

    return (
        // Render modal based on showModal state
        is_show && (
            <div
                id={modalId}
                className="modal fade show"
                role="dialog"
                aria-modal={true}
                style={{
                    display: 'block',
                    paddingLeft: 0
                }}
            >
                <div className="modal-dialog modal-sm" style={{pointerEvents: "visible"}}>
                    <div className={`modal-content${type === "Success" ? " modal-filled bg-success" : type === "Danger"? "modal-filled bg-danger":""}`}
                        style={{
                            position: 'relative',
                            zIndex: 9999
                        }}
                    >
                        <div className="modal-body p-4">
                            <div className="text-center">
                                <i className={`dripicons-${type.toLowerCase()} h1${type === "Danger" ? " text-white" : ""}`} />
                                <h4 className={`mt-2${type === "Danger" ? " text-white" : ""}`}>{title}</h4>
                                <p className={`mt-3${type === "Danger" ? " text-white" : ""}`}>
                                    {content}
                                </p>
                                <button
                                    type="button"
                                    className={`btn ${type === "Danger" ? " btn-light" : `btn-${type.toLowerCase()}`}`}
                                    onClick={onButtonClick}
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-backdrop fade show" onClick={handleClose}></div>
            </div>
        )
    );
};
