import { fs } from "./FirebaseConfig"

export async function fetchUploadFile(props) {
    let {docRef, image} = props
    let storageRef = fs.ref()
    let fileName = new Date().getTime() + "-" + image.name
    try {
        await storageRef.child(fileName).put(image)
        let downloadURL = await storageRef.child(fileName).getDownloadURL()
        await docRef.update({ img: downloadURL })
        return true
    } catch (error) {
        return false
    }
}