SELECT userName
FROM user, photoPosts
WHERE user.userID = photoPosts.userID
GROUP BY user.userID
HAVING count(photoPosts.userID) > 3;