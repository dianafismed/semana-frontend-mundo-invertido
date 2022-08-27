import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js'
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js"
import firebaseConfig from './config'

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export default app; analytics