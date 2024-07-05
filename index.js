const app = require('./src/hello')

app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000')
})

app.get('/', (req, res) => {
  res.send('Saluuuuut :)')
})
