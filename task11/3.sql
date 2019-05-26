SELECT *
FROM photoPosts
WHERE userID = (
  SELECT userID
  FROM user
  WHERE userName = 'UlyanaChernetskaya')
AND createAt = '2019-05-01';