const swap = (index1, index2) => {
    var arr = [...items];
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    setItems(arr);
};



const userData = {
    userReference: 'idnumer',
    userLanguage: 'EN',
    wordReference: [
        [[0, 1, 2], [], [], [], []],
        [[0, 1, 2], [], [], [], []],
        [[0, 1, 2], [], [], [], []],
    ],

}


app.post("/setupDataRecord", (request, response) => {
    console.log('sending users id', request.body);
  
    
  
    dbUsersInfoFlashcard.find({ userReference: request.body.userId }, function (err, docs) {
      console.log('found in database', docs);
      

      if (docs === []) {
        dbUsersInfoFlashcard.insert({
            userReference: request.body.userId,
            wordReference: [
                [[0, 1, 2], [], [], [], []],
                [[0, 1, 2], [], [], [], []],
                [[0, 1, 2], [], [], [], []],
            ]
        }, function (error, newDoc) {   
            if (error) {
              console.log(error);
              throw error;
            }    
            console.log('succes');
            console.log(newDoc);
            response.json({
                message: 'set up new record in data base'
              });
          })
      } else {
        response.json({
            message: 'record already in database',
            doc: docs[0]
          });
      }

      
    })
  
})




const db = {
    _id: "stringGenAuto",
    refNum: "1",
    title: "ting",
    words: [
        {
            wordId: 0,
            nor: "en bil",
            norFull: "bilen",
            eng: "a car",
            pl: "samochod",
            es: "string",
            description: "",
            example: "",
            inflection: "",
            soundLink: ""
        },
        {
            wordId: 1,
            nor: "et hus",
            norFull: "huset",
            eng: "a house",
            pl: "dom",
            es: "string2",
            description: "",
            example: "",
            inflection: "",
            soundLink: ""
        },
        {
            wordId: 2,
            nor: "et bord",
            norFull: "bordet",
            eng: "a table",
            pl: "stol",
            es: "string3",
            description: "",
            example: "",
            inflection: "",
            soundLink: ""
        }
    ]
}

const db2 = {
    _id: "stringGenAuto",
    refNum: "2",
    title: "ukedager",
    words: [
        {
            wordId: 0,
            nor: "mandag",
            norFull: "mandag",
            eng: "monday",
            pl: "poniedzialek",
            es: "poniedzialek3",
            description: "",
            example: "",
            inflection: "",
            soundLink: ""
        },
        {
            wordId: 1,
            nor: "tirsdag",
            norFull: "trisdag",
            eng: "tusday",
            pl: "wtorek",
            es: "wtorek3",
            description: "",
            example: "",
            inflection: "",
            soundLink: ""
        },
        {
            wordId: 2,
            nor: "onsdag",
            norFull: "onsdag",
            eng: "wendsday",
            pl: "sroda",
            es: "sroda3",
            description: "",
            example: "",
            inflection: "",
            soundLink: ""
        }
    ]
}

const db3 = {
    _id: "stringGenAuto",
    refNum: "2",
    title: "farger",
    words: [
        {
            wordId: 0,
            nor: "gul",
            norFull: "gul",
            eng: "golden",
            pl: "zolty",
            es: "zolty3",
            description: "",
            example: "",
            inflection: "",
            soundLink: ""
        },
        {
            wordId: 1,
            nor: "svart",
            norFull: "svart",
            eng: "black",
            pl: "czarny",
            es: "czarny3",
            description: "",
            example: "",
            inflection: "",
            soundLink: ""
        },
        {
            wordId: 2,
            nor: "grønn",
            norFull: "grønn",
            eng: "green",
            pl: "zielony",
            es: "zielony3",
            description: "",
            example: "",
            inflection: "",
            soundLink: ""
        }
    ]
}







dbFlashcardList.insert(db, function (error, newDoc) {   
    if (error) {
      console.log(error);
      throw error;
    }    
    console.log('succes');
    console.log(newDoc);
  })
  
  dbFlashcardList.insert(db2, function (error, newDoc) {   
    if (error) {
      console.log(error);
      throw error;
    }    
    console.log('succes');
    console.log(newDoc);
  })
  
  dbFlashcardList.insert(db3, function (error, newDoc) {   
    if (error) {
      console.log(error);
      throw error;
    }    
    console.log('succes');
    console.log(newDoc);
  })
  

  [{"description": "here is some description", "key": 1, "level": "A1", "link": "Class1x1x1", "showPro": false, "title": "First thing"}, {"description": "here is some description 2", "key": 2, "level": "A1", "link": "Class1x2x1", "showPro": false, "title": "Sceond thing"}, {"description": "here is some description 3", "key": 3, "level": "A1", "link": "", "showPro": false, "title": "Third thing"}, {"description": "here is some description 4", "key": 4, "level": "A1", "link": "", "showPro": true, "title": "Fourth thing"}, {"description": "here is some description 5", "key": 5, "level": "A1", "link": "", "showPro": true, "title": "Fifth thing"}, {"description": "here is some description", "key": 6, "level": "A1", "link": "", "showPro": true, "title": "First thing"}, {"description": "here is some description 2", "key": 7, "level": "A1", "link": "", "showPro": true, "title": "Sceond thing"}, {"description": "here is some description 3", "key": 8, "level": "A1", "link": "", "showPro": true, "title": "Third thing"}, {"description": "here is some description 4", "key": 9, "level": "A1", "link": "", "showPro": true, "title": "Fourth thing"}, {"description": "here is some description 5", "key": 10, "level": "A1", "link": "", "showPro": true, "title": "Fifth thing"}]
  [{"description": "", "eng": "a car", "es": "string", "example": "", "inflection": "", "nor": "en bil", "norFull": "bilen", "pl": "samochod", "soundLink": "", "wordId": 0}, {"description": "", "eng": "a house", "es": "string2", "example": "", "inflection": "", "nor": "et hus", "norFull": "huset", "pl": "dom", "soundLink": "", "wordId": 1}, {"description": "", "eng": "a table", "es": "string3", "example": "", "inflection": "", "nor": "et bord", "norFull": "bordet", "pl": "stol", "soundLink": "", "wordId": 2}]

  useEffect(() => {


    const data = {
      userId,
    }

    const fetchData = async () => {
      const result = await fetch(serverLink, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      const response = await result.json();
      console.log(response);
    };

    if (userId !== '') {
      fetchData();
      console.log('checking if there is record in database for this user id: ', userId);
    }

    return () => {
      fetchData;
    };
  }, [userId])


  