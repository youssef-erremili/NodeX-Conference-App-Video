/**
 * Maps browser MediaErrors to user-friendly messages
 */
export const getMediaErrorMessage = (err: any): string => {
    if (err.name === 'NotAllowedError') {
        return 'Camera access denied. Please allow camera permissions.';
    } else if (err.name === 'NotFoundError') {
        return 'No camera found on this device.';
    } else if (err.name === 'NotReadableError') {
        return 'Camera is already in use by another application.';
    }
    return `Camera error: ${err.message}`;
};

/**
 * Requests media access and returns the stream or a formatted error message
 */
export const requestMediaStream = async (constraints: MediaStreamConstraints) => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        return { stream, error: null };
    } catch (err: any) {
        return {
            stream: null,
            error: getMediaErrorMessage(err)
        };
    }
};
