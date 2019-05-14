var photoPosts = [
   {
        id: '1',
        descriprion: ' ',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'NinaVolk',
        photoLink: ' ',
        hashTags: ['1','3'],
        likes: []
   },
   {
        id: '2',
        descriprion: ' ',
        createdAt: new Date('2018-02-23T23:10:02'),
        author: 'UlyanaChernetskaya',
        photoLink: ' ',
        hashTags: ['2','5'],
        likes: []
   },
   {
        id: '3',
        descriprion: ' ',
        createdAt: new Date('2018-03-02T20:04:04'),
        author: 'MiraObolenskaya',
        photoLink: ' ',
        hashTags: ['3','4'],
        likes: []
   },
   {
        id: '4',
        descriprion: ' ',
        createdAt: new Date('2019-05-20T23:05:30'),
        author: 'NinaVolk',
        photoLink: ' ',
        hashTags: ['2','4'],
        likes: []
   },
   {
        id: '5',
        descriprion: ' ',
        createdAt: new Date('2017-12-31T13:32:47'),
        author: 'UlyanaChernetskaya',
        photoLink: ' ',
        hashTags: ['1'],
        likes: []
   },
   {
        id: '6',
        descriprion: ' ',
        createdAt: new Date('2018-02-23T23:00:01'),
        author: 'MiraObolenskaya',
        photoLink: ' ',
        hashTags: ['2'],
        likes: []
   },
   {
        id: '7',
        descriprion: ' ',
        createdAt: new Date('2018-02-23T23:00:03'),
        author: 'UlyanaChernetskaya',
        photoLink: ' ',
        hashTags: ['3'],
        likes: []
   },
   {
        id: '8',
        descriprion: ' ',
        createdAt: new Date('2018-02-28T23:00:00'),
        author: 'NinaVolk',
        photoLink: ' ',
        hashTags: ['4'],
        likes: []
   },
   {
        id: '9',
        descriprion: ' ',
        createdAt: new Date('2018-07-23T23:00:00'),
        author: 'NinaVolk',
        photoLink: ' ',
        hashTags: ['5'],
        likes: []
   },
   {
        id: '10',
        descriprion: ' ',
        createdAt: new Date('2018-02-23T23:01:00'),
        author: 'UlyanaChernetskaya',
        photoLink: ' ',
        hashTags: ['3','4'],
        likes: []
   },
   {
        id: '11',
        descriprion: ' ',
        createdAt: new Date('2018-02-13T23:00:00'),
        author: 'NinaVolk',
        photoLink: ' ',
        hashTags: ['1','3'],
        likes: []
   },
   {
        id: '12',
        descriprion: ' ',
        createdAt: new Date('2018-02-03T23:00:00'),
        author: 'UlyanaChernetskaya',
        photoLink: ' ',
        hashTags: ['2','5'],
        likes: []
   },
   {
        id: '13',
        descriprion: ' ',
        createdAt: new Date('2018-02-23T23:00:32'),
        author: 'UlyanaChernetskaya',
        photoLink: ' ',
        hashTags: ['2','3','4'],
        likes: []
   },
   {
        id: '14',
        descriprion: ' ',
        createdAt: new Date('2018-02-23T23:18:00'),
        author: 'NinaVolk',
        photoLink: ' ',
        hashTags: ['1','3','5'],
        likes: []
   },
   {
        id: '15',
        descriprion: ' ',
        createdAt: new Date('2018-02-23T09:00:00'),
        author: 'MiraObolenskaya',
        photoLink: ' ',
        hashTags: ['2','3','5'],
        likes: []
   },
   {
        id: '16',
        descriprion: ' ',
        createdAt: new Date('2018-02-23T23:59:00'),
        author: 'UlyanaChernetskaya',
        photoLink: ' ',
        hashTags: ['1','2','3'],
        likes: []
   },
   {
        id: '17',
        descriprion: ' ',
        createdAt: new Date('2018-02-23T23:00:05'),
        author: 'NinaVolk',
        photoLink: ' ',
        hashTags: ['1','2','3'],
        likes: []
   },
   {
        id: '18',
        descriprion: ' ',
        createdAt: new Date('2018-09-23T23:00:00'),
        author: 'UlyanaChernetskaya',
        photoLink: ' ',
        hashTags: ['1','3','4'],
        likes: []
   },
   {
        id: '19',
        descriprion: ' ',
        createdAt: new Date('2016-02-23T23:00:00'),
        author: 'MiraObolenskaya',
        photoLink: ' ',
        hashTags: ['3'],
        likes: []
   },
   {
        id: '20',
        descriprion: ' ',
        createdAt: new Date('2018-12-23T23:00:00'),
        author: 'NinaVolk',
        photoLink: ' ',
        hashTags: ['1'],
        likes: []
   },
   {
        id: '21',
        descriprion: ' ',
        createdAt: new Date('2018-10-23T23:00:00'),
        author: 'MiraObolenskaya',
        photoLink: ' ',
        hashTags: ['1','2','5'],
        likes: []
   },
   {
        id: '22',
        descriprion: ' ',
        createdAt: new Date('2018-11-23T23:00:00'),
        author: 'UlyanaChernetskaya',
        photoLink: ' ',
        hashTags: ['1','2','3'],
        likes: []
   }
];

function getPhotoPost(id){
     if (parseInt(id) && !(/[^0-9]/.test(id))){
          var numberPost = -1;
          if (id > 0){
               for(var i = 0; i <photoPosts.length; i++){
                    if(photoPosts[i].id == id) {numberPost = i}
               }
               if (parseInt(numberPost) > -1){
                    return photoPosts[numberPost];
               }
          }
     }
     else console.log("ERROR\n")
     return false;
}

function removePhotoPost(id){
     var numberPost = -1;
     for(var i = 0; i <photoPosts.length; i++){
          if(photoPosts[i].id == id) {numberPost = i}
     }
     if (numberPost > -1){
          photoPosts.splice(numberPost, 1);
          console.log(photoPosts);
          return true;
     }
     return false;
}

function isExists(object){
     return !!object;
}

function checkId(id){
     if (parseInt(id) && !(/[^0-9]/.test(id))){
          return true;
     }
     return false;
}

function checkDescriprion(descriprion){
     if (typeof(descriprion) === 'string'){
          if(descriprion.length <= 200 && descriprion.length > 0){
               return true;
          }
     }
     return false;
}

function checkDate(date){
     if(date instanceof Date) {
          return true;
     }
     return false;
}

function checkString(str){
     if (typeof(str) === 'string'){
          if(str.length > 0){
               return true;
          }
     }
     return false;
}

function checkArray(array){
     if(!Array.isArray(array)) return false;
     if(array.length > 0){
          for(var i = 0; i < array.length; i++){
               if(!checkString(array[i])) {
                    return false;
               }
          }
     }
     return true;
}

function validatePhotoPost(photoPost){
     if(isExists(photoPost.id) && isExists(photoPost.descriprion) && 
        isExists(photoPost.createdAt) && isExists(photoPost.author) &&
        isExists(photoPost.photoLink) && isExists(photoPost.likes) &&
        isExists(photoPost.hashTags)){
             if(checkId(photoPost.id) && checkDate(photoPost.createdAt) &&
                checkDescriprion(photoPost.descriprion) && 
                checkString(photoPost.author) && checkString(photoPost.photoLink) &&
                checkArray(photoPost.hashTags) && checkArray(photoPost.likes)){
                  return true;
             }
     }
     return false;
}

function editPhotoPost(id, photoPost){
     if(getPhotoPost(id)){
          var flag = true;
          while(i < photoPosts.length && flag){
               if(photoPosts[i].id == id) {flag = false;}
               else {i++;}
          }
          if(i == photoPosts.length) {return false;}
          if(isExists(photoPost.descriprion)) {
               if(checkDescriprion(photoPost.descriprion)){
                    photoPosts[i].descriprion = photoPost.descriprion;
               }
               else {return false;}
          }
          if(isExists(photoPost.photoLink)) {
               if(checkString(photoPost.photoLink)){
                    photoPosts[i].photoLink = photoPost.photoLink;
               }
               else {return false;}
          }
          if(isExists(photoPost.hashTags)) {
               if(checkArray(photoPost.hashTags)){
                    photoPosts[i].hashTags = photoPost.hashTags;
               }
               else {return false;}
          }
          console.log(photoPosts[i]);
          return true;
     }
     return false;
}

function addPhotoPost(photoPost){
     if(validatePhotoPost(photoPost)){
          if(getPhotoPost(photoPost.id)) {
               if(editPhotoPost(photoPost.id, photoPost)){
                    return true;
               }
               return false;
          }
          else {
               photoPosts.push(photoPost);
               console.log(photoPosts);
               return true;
          }
     }
     return false;
}

function compereDate(a,b){
     return b.createdAt - a.createdAt;
}

function getPhotoPosts(skip, top, filterConfig){
     skip = skip || 0;
     top = top || 10;
     var posts = photoPosts;
     var post = [];
     if(!isExists(filterConfig)){
          post = posts.slice(skip,top).sort(compereDate);
          console.log(post);
          return post;
     }
     if(isExists(filterConfig.author)){
          if(!checkString(filterConfig.author)) return false;
          for(var i = 0; i < posts.length; i++){
               if(posts[i].author == filterConfig.author) {post.push(posts[i]);}
          }
          posts = post;
          post = [];
     }
     if(isExists(filterConfig.Date1)){
          if(!checkDate(filterConfig.Date1)) return false;
          for(var i = 0; i < posts.length; i++){
               if(posts[i].createdAt - filterConfig.Date1 >= 0) {post.push(posts[i]);}
          }
          posts = post;
          post = [];
     }
     if(isExists(filterConfig.Date2)){
          if(!checkDate(filterConfig.Date2)) return false;
          for(var i = 0; i < posts.length; i++){
               if(posts[i].createdAt - filterConfig.Date2 <= 0) {post.push(posts[i]);}
          }
          posts = post;
          post = [];
     }
     if(isExists(filterConfig.hashTags)){
          if(!checkArray(filterConfig.hashTags)) {return false;}
          for(var i = 0; i < filterConfig.hashTags.length; i++){
               console.log(posts.length);
               for(var j = 0; j < posts.length; j++){
                    var flag = false;
                    var k = 0;
                    while((k < posts[j].hashTags.length) && !flag){
                         if(posts[j].hashTags[k] == filterConfig.hashTags[i]){flag = true;}
                         k++;
                    }
                    if(flag) {post.push(posts[j]);}
               }
               posts = post;
               post = [];
          }
     }
     return posts.slice(skip,top).sort(compereDate);
}