import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from './firebase'

/**
 * Upload a file to Firebase Storage
 * @param file      File | Blob | Uint8Array
 * @param path      string - e.g. "images/photo.jpg"
 * @param makePublic boolean - if true, returns a public URL
 */
export async function upload(file: Blob | Uint8Array, path: string, makePublic = false) {
    if (!file) throw new Error('No file provided')
    if (!path) throw new Error('No upload path provided')

    // Create a storage reference
    const storageRef = ref(storage, path)

    // Upload the file
    const snapshot = await uploadBytes(storageRef, file, {
        contentType: (file as any).type || undefined, // browser File / Blob auto-sets MIME
    })

    // Optional: get public URL
    let url: string | null = null
    if (makePublic) {
        url = await getDownloadURL(snapshot.ref)
    }

    return {
        path,
        fullPath: snapshot.metadata.fullPath,
        size: snapshot.metadata.size,
        contentType: snapshot.metadata.contentType,
        bucket: snapshot.metadata.bucket,
        downloadURL: url,
    }
}
