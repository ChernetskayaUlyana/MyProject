//task 4

var photoPosts = [
   {
        id: '1',
        descriprion: ' ',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'NinaVolk',
        photoLink: ' ',
        hashTags: ['#1','#3'],
        likes: []
   },
   {
        id: '2',
        descriprion: ' ',
        createdAt: new Date('2018-02-23T23:10:02'),
        author: 'UlyanaChernetskaya',
        photoLink: ' ',
        hashTags: ['#2','#5'],
        likes: ['NinaVolk']
   },
   {
        id: '3',
        descriprion: ' ',
        createdAt: new Date('2018-03-02T20:04:04'),
        author: 'MiraObolenskaya',
        photoLink: ' ',
        hashTags: ['#3','#4'],
        likes: []
   },
   {
        id: '4',
        descriprion: ' ',
        createdAt: new Date('2019-05-20T23:05:30'),
        author: 'NinaVolk',
        photoLink: ' ',
        hashTags: ['#2','#4'],
        likes: []
   },
   {
        id: '5',
        descriprion: ' ',
        createdAt: new Date('2017-12-31T13:32:47'),
        author: 'UlyanaChernetskaya',
        photoLink: ' ',
        hashTags: ['#1'],
        likes: []
   },
   {
        id: '6',
        descriprion: ' ',
        createdAt: new Date('2018-02-23T23:00:01'),
        author: 'MiraObolenskaya',
        photoLink: ' ',
        hashTags: ['#2'],
        likes: ['NinaVolk']
   },
   {
        id: '7',
        descriprion: ' ',
        createdAt: new Date('2018-02-23T23:00:03'),
        author: 'UlyanaChernetskaya',
        photoLink: ' ',
        hashTags: ['#3'],
        likes: []
   },
   {
        id: '8',
        descriprion: ' ',
        createdAt: new Date('2018-02-28T23:00:00'),
        author: 'NinaVolk',
        photoLink: ' ',
        hashTags: ['#4'],
        likes: []
   },
   {
        id: '9',
        descriprion: ' ',
        createdAt: new Date('2018-07-23T23:00:00'),
        author: 'NinaVolk',
        photoLink: ' ',
        hashTags: ['#5'],
        likes: []
   },
   {
        id: '10',
        descriprion: ' ',
        createdAt: new Date('2018-02-23T23:01:00'),
        author: 'UlyanaChernetskaya',
        photoLink: ' ',
        hashTags: ['#3','#4'],
        likes: ['NinaVolk']
   },
   {
        id: '11',
        descriprion: ' ',
        createdAt: new Date('2018-02-13T23:00:00'),
        author: 'NinaVolk',
        photoLink: ' ',
        hashTags: ['#1','#3'],
        likes: []
   },
   {
        id: '12',
        descriprion: ' ',
        createdAt: new Date('2018-02-03T23:00:00'),
        author: 'UlyanaChernetskaya',
        photoLink: ' ',
        hashTags: ['#2','#5'],
        likes: []
   },
   {
        id: '13',
        descriprion: ' ',
        createdAt: new Date('2018-02-23T23:00:32'),
        author: 'UlyanaChernetskaya',
        photoLink: ' ',
        hashTags: ['#2','#3','#4'],
        likes: []
   },
   {
        id: '14',
        descriprion: ' ',
        createdAt: new Date('2018-02-23T23:18:00'),
        author: 'NinaVolk',
        photoLink: ' ',
        hashTags: ['#1','#3','#5'],
        likes: []
   },
   {
        id: '15',
        descriprion: ' ',
        createdAt: new Date('2018-02-23T09:00:00'),
        author: 'MiraObolenskaya',
        photoLink: ' ',
        hashTags: ['#2','#3','#5'],
        likes: ['NinaVolk']
   },
   {
        id: '16',
        descriprion: ' ',
        createdAt: new Date('2018-02-23T23:59:00'),
        author: 'UlyanaChernetskaya',
        photoLink: ' ',
        hashTags: ['#1','#2','#3'],
        likes: ['NinaVolk']
   },
   {
        id: '17',
        descriprion: ' ',
        createdAt: new Date('2018-02-23T23:00:05'),
        author: 'NinaVolk',
        photoLink: ' ',
        hashTags: ['#1','#2','#3'],
        likes: []
   },
   {
        id: '18',
        descriprion: ' ',
        createdAt: new Date('2018-09-23T23:00:00'),
        author: 'UlyanaChernetskaya',
        photoLink: ' ',
        hashTags: ['#1','#3','#4'],
        likes: []
   },
   {
        id: '19',
        descriprion: ' ',
        createdAt: new Date('2016-02-23T23:00:00'),
        author: 'MiraObolenskaya',
        photoLink: ' ',
        hashTags: ['#3'],
        likes: []
   },
   {
        id: '20',
        descriprion: ' ',
        createdAt: new Date('2018-12-23T23:00:00'),
        author: 'NinaVolk',
        photoLink: ' ',
        hashTags: ['#1'],
        likes: []
   },
   {
        id: '21',
        descriprion: ' ',
        createdAt: new Date('2018-10-23T23:00:00'),
        author: 'MiraObolenskaya',
        photoLink: ' ',
        hashTags: ['#1','#2','#5'],
        likes: ['NinaVolk']
   },
   {
        id: '22',
        descriprion: ' ',
        createdAt: new Date('2018-11-23T23:00:00'),
        author: 'UlyanaChernetskaya',
        photoLink: ' ',
        hashTags: ['#1','#2','#3'],
        likes: ['NinaVolk']
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

function validatePhotoPost(photoPost){
     if(isExists(photoPost.id) && isExists(photoPost.descriprion) && 
        isExists(photoPost.createdAt) && isExists(photoPost.author) &&
        isExists(photoPost.photoLink) && isExists(photoPost.likes) &&
        isExists(photoPost.hashTags)){
             if(checkId(photoPost.id) && checkDate(photoPost.createdAt) &&
                checkDescriprion(photoPost.descriprion) && 
                checkString(photoPost.author) && checkString(photoPost.photoLink) &&
                checkHashTags(photoPost.hashTags) && checkArray(photoPost.likes)){
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
     if(isExists(filterConfig.likes)){
          if(!checkString(filterConfig.likes)) {return false;}
          for(var j = 0; j < posts.length; j++){
               var flag = false;
               var k = 0;
               while((k < posts[j].likes.length) && !flag){
                    if(posts[j].likes[k] == filterConfig.likes){flag = true;}
                    k++;
               }
               if(flag) {post.push(posts[j]);}
          }
          posts = post;
          post = [];
     }
     return posts.slice(skip,top).sort(compereDate);
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

function checkHashTags(array){
     if(!Array.isArray(array)) return false;
     if(array.length > 0){
          for(var i = 0; i < array.length; i++){
               if (typeof(array[i]) === 'string'){
                    if(array[i].length > 1 && array[i][0] == '#'){
                         return true;
                    }
               }
               return false;
          }
     }
     return true;
}

function compereDate(a,b){
     return b.createdAt - a.createdAt;
}

//task 5

class PostCollection{

     constructor(postsArray){
          this.thisPhotoPost = new Array();
          postsArray.forEach(element => {
               if(PostCollection.validate(element)){
                    this.thisPhotoPost.push(element);
               }               
          });
          this.thisPhotoPost.sort(compereDate);
     }

     static validate(photoPost){
          if(isExists(photoPost.id) && isExists(photoPost.descriprion) && 
                  isExists(photoPost.createdAt) && isExists(photoPost.author) &&
                  isExists(photoPost.photoLink) && isExists(photoPost.likes) &&
                  isExists(photoPost.hashTags)){
                       if(checkId(photoPost.id) && checkDate(photoPost.createdAt) &&
                          checkDescriprion(photoPost.descriprion) && 
                          checkString(photoPost.author) && checkString(photoPost.photoLink) &&
                          checkHashTags(photoPost.hashTags) && checkArray(photoPost.likes)){
                            return true;
                       }
               }
          return false;
     }

     getPage(skip, top, filterConfig){
          skip = skip || 0;
          top = top || 10;
          var posts = this.thisPhotoPost;
          var post = [];
          if(!isExists(filterConfig)){
               post = posts.slice(skip,top).sort(compereDate);
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
          if(isExists(filterConfig.likes)){
               if(!checkString(filterConfig.likes)) {return false;}
               for(var j = 0; j < posts.length; j++){
                    var flag = false;
                    var k = 0;
                    while((k < posts[j].likes.length) && !flag){
                         if(posts[j].likes[k] == filterConfig.likes){flag = true;}
                         k++;
                    }
                    if(flag) {post.push(posts[j]);}
               }
               posts = post;
               post = [];
          }
          return posts.slice(skip,top).sort(compereDate);
     }

     get(id){
          if (parseInt(id) && !(/[^0-9]/.test(id))){
               var numberPost = -1;
               var flag = true;
               if (id > 0){
                    for(var i = 0; i <this.thisPhotoPost.length && flag; i++){
                         if(this.thisPhotoPost[i].id == id) {numberPost = i; flag = false;}
                    }
                    if (parseInt(numberPost) > -1){
                         return this.thisPhotoPost[numberPost];
                    }
               }
          }
          else console.log("ERROR\n")
          return false;
     }

     add(photoPost){
          if(PostCollection.validate(photoPost)){
               if(this.get(photoPost.id)) {
                    if(this.edit(photoPost.id, photoPost)){
                         return true;
                    }
                    return false;
               }
               else {
                    this.thisPhotoPost.push(photoPost);
                    console.log(this.thisPhotoPost.sort(compereDate));
                    return true;
               }
          }
          return false;
     }

     edit(id, photoPost){
          if(this.get(id)){
               var flag = true;
               var i = 0;
               while(i < this.thisPhotoPost.length && flag){
                    if(this.thisPhotoPost[i].id == id) { flag = false;}
                    else {i++;}
               }
               if(i == this.thisPhotoPost.length) {return false;}
               if(isExists(photoPost.descriprion)) {
                    if(checkDescriprion(photoPost.descriprion)){
                         this.thisPhotoPost[i].descriprion = photoPost.descriprion;
                    }
                    else {return false;}
               }
               if(isExists(photoPost.photoLink)) {
                    if(checkString(photoPost.photoLink)){
                         this.thisPhotoPost[i].photoLink = photoPost.photoLink;
                    }
                    else {return false;}
               }
               if(isExists(photoPost.hashTags)) {
                    if(checkArray(photoPost.hashTags)){
                         this.thisPhotoPost[i].hashTags = photoPost.hashTags;
                    }
                    else {return false;}
               }
               console.log(this.thisPhotoPost[i]);
               return true;
          }
          return false;
     }

     remove(id){
          var numberPost = -1;
          for(var i = 0; i < this.thisPhotoPost.length; i++){
               if(this.thisPhotoPost[i].id == id) {numberPost = i}
          }
          if (numberPost > -1){
               this.thisPhotoPost.splice(numberPost, 1);
               console.log(this.thisPhotoPost);
               return true;
          }
          return false;
     }

     addAll(posts){
          var ret = new Array();
          posts.forEach(element =>{
               if(PostCollection.validate(element)){
                    this.thisPhotoPost.push(element);
               }
               else{
                    ret.push(element);
               }
          });
          this.thisPhotoPost.sort(compereDate);
          return ret;
     }

}