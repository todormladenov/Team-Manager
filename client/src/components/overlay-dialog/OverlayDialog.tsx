type OverlayDialogProps = {
    message: string,
    onClose: () => void
}

export default function OverlayDialog({ message, onClose }: OverlayDialogProps) {
    return (
        <div className="overlay">
            <div className="modal">
                <p>{message}</p>
                <button onClick={onClose} className="action">Go Back</button>
            </div>
        </div>
    );
}