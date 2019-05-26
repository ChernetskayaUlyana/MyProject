SELECT *
FROM photoPosts
WHERE userID = (
  SELECT userID
  FROM user
  WHERE userName = 'NinaVolk')
AND description LIKE '%hello%';