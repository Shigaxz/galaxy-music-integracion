const express = require('express');
const app = express();
const port = 8000;
const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'data.json');
app.use(express.json());

let items = [];

const readData = () => {
    if (fs.existsSync(dataFilePath)) {
      const rawData = fs.readFileSync(dataFilePath);
      console.log('Datos leídos:', JSON.parse(rawData));
      return JSON.parse(rawData);
    }
    return [];
  };

const writeData = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

app.get('/', (req, res) => {
  res.send('¡Hola desde el servidor local!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
  console.log(`http://localhost:${port}/api/promos`);
});

//LEER
app.get('/api/promos', (req, res) => {
    const items = readData();
    res.status(200).send(items);
});
//LEER ID
app.get('/api/promos/:id', (req, res) => {
    const items = readData();
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (item) {
    res.status(200).send(item);
  } else {
    res.status(404).send({ message: 'Item no encontrado' });
  }
});
//AGREGAR
app.post('/api/promos', (req, res) => {
    console.log(req.body);
    const newItem = req.body;
    items.push(newItem);
    writeData(items);
    res.status(201).send(newItem);
});
//MODIFICAR
app.put('/api/promos/:id', (req, res) => {
    const items = readData();
  const itemId = parseInt(req.params.id);
  console.log('ID del ítem a actualizar:', itemId);
  const index = items.findIndex(i => i.id === itemId);
  if (index !== -1) {
    console.log('Ítem encontrado:', items[index]);
    const updatedItem = { ...items[index], ...req.body };
    items[index] = updatedItem;
    writeData(items);
    console.log('Ítem actualizado:', updatedItem);
    res.status(200).send(updatedItem);
  } else {
    console.log('Ítem no encontrado');
    res.status(404).send({ message: 'Item no encontrado' });
  }
});
//ELIMINAR
app.delete('/api/promos/:id', (req, res) => {
    const items = readData();
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (item) {
    const deletedItem = items.splice(item, 1);
    writeData(items);
    res.status(200).send(deletedItem);
  } else {
    res.status(404).send({ message: 'Item no encontrado' });
  }
});