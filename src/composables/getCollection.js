import { projectFirestore } from '@/firebase/configs'
import { ref, watchEffect } from 'vue'

const getCollection = (collection) => {
  const documents = ref(null)
  const error = ref(null)

  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy('createdAt')

  const unsub = collectionRef.onSnapshot(
    (snapshot) => {
      let results = []
      snapshot.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
      })
      documents.value = results
      error.value = null
    },
    (err) => {
      console.log(err.message)
      documents.value = null
      error.value = 'Could not fetch data'
    }
  )

  watchEffect((onInvalidate) => {
    // unsub from previous collection when watcher is stopped (component unmounted)
    onInvalidate(() => unsub())
  })

  return { documents, error }
}

export default getCollection
