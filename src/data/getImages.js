import { projectFirestore } from '../firebase/config';

export const getData = async(setDocuments) => {
    try {
        const collectionRef = await projectFirestore.collection('images').get()
        let docs = []
        collectionRef.forEach(doc => docs.push({...doc.data()}))
        setDocuments(docs)
    }catch(err) {
        console.log(err)
    }
}