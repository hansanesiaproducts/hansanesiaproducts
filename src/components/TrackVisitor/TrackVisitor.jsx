import { initializeApp } from "firebase/app";
import {
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { useEffect } from "react";
const TrackVisitor = (props) => {
  const { setTotalVisitor } = props;
  const firebaseConfig = {
    apiKey: "AIzaSyC0GyE1mmcgqguTigSoEOHVwWFvFn6haFE",
    authDomain: "hansanesia.firebaseapp.com",
    projectId: "hansanesia",
    storageBucket: "hansanesia.appspot.com",
    messagingSenderId: "1097519626562",
    appId: "1:1097519626562:web:98c474e66e3f5515ae30db",
    measurementId: "G-J3XY1Y7R10",
  };
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);
  useEffect(() => {
    if (getCookie("user_check") === "") {
      setCookies();
      incrementData();
    }
    getData();
  }, []);
  const incrementData = async () => {
    try {
      const visitorRef = doc(db, "visitors", "LRohzpuY8h2sLpvPtNSC");
      const visitorData = await getDoc(visitorRef);
      const total = visitorData.data().total;
      await updateDoc(visitorRef, {
        total: total + 1,
      });
    } catch (e) {
      console.error("Error incrementing data.");
    }
  };
  const getData = async () => {
    try {
      const visitorRef = doc(db, "visitors", "LRohzpuY8h2sLpvPtNSC");
      const visitorData = await getDoc(visitorRef);
      const total = visitorData.data().total;
      setTotalVisitor(total);
    } catch (e) {
      console.error("Error ");
    }
  };
  const setCookies = () => {
    document.cookie = "user_check=1; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  };
  const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };
  return "";
};

export default TrackVisitor;
