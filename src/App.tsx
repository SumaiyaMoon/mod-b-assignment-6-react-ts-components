import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Input from './components/input';
import Button from './components/button';
import Table from './components/table';
import Select from './components/select';
import Card from './components/card';


function App() {


  let ButtonData = [
    {
      name: "Harry Potter",
      city: "London"
    },
    {
      name: "Don Quixote",
      city: "Madrid"
    },
    {
      name: "Joan of Arc",
      city: "Paris"
    },
    {
      name: "Rosa Park",
      city: "Alabama"
    }
  ]

  let tableData =
    [
      {
        "title": "Clean the kitchen",
        "description": "Mop the floor, wipe the countertop and don't forget to take out the trash!"
      },
      {
        "title": "Call Mom",
        "description": "It's her birthday!"
      },
      {
        "title": "Water flowers",
        "description": "They need water, or they will die."
      }
    ]

  let cardData =
    [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",

      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
      },
      {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
      },
      {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
      },
      {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
      },
      {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
      },
      {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
      }
    ]
  let selectData = ['Apple', 'Banana', 'Grapes', 'Apricot']







  return (
    <>

      {/* Button */}
      <div>
        <p className='m-2 fw-bold'>Button Component</p>
        <div className='d-flex align-items-center justify-content-around'>
          <Button btnValue={ButtonData[0].name} city={ButtonData[0].city} />
          <Button btnValue={ButtonData[1].name} city={ButtonData[1].city} />
          <Button btnValue={ButtonData[2].name} city={ButtonData[2].city} />
          <Button btnValue={ButtonData[3].name} city={ButtonData[3].city} />
        </div>
      </div>

      {/* Input */}
      <div>
        <p className='m-2 fw-bold'>Input Component</p>
        <div className='d-flex align-items-center justify-content-around'>
          <Input inputType='text' inputValue='Henry James' />
          <Input inputType='password' inputValue='JohnDoe0123' />
          <Input inputType='email' inputValue='williamstone@gmail.com' />
        </div>
      </div>

      {/* Table */}
      <div>
        <p className='m-2 fw-bold'>Table Component</p>
        <div className='d-flex align-items-center justify-content-around'>
          <Table label="Testing Data"
            cols={
              [
                {
                  heading: "Title",
                  key: "title",
                },
                {
                  heading: "Description",
                  key: "description",
                },

              ]
            }
            datasource={tableData}
          />
        </div>
      </div>

      {/* Select */}
      <div>
        <p className='m-2 fw-bold'>Select Component</p>
        <div className='d-flex align-items-center justify-content-around'>
          <Select options={selectData} />
          <Select options={selectData} />
          <Select options={selectData} />
        </div>
      </div>

      {/* Card */}
      <div>
        <p className='m-2 fw-bold'>Card Component</p>
        <div className='d-flex align-items-center justify-content-around'>
          <Card datasource={cardData} cols={
            [
              {
                heading: "id",
                key: "id"
              },
              {
                heading: "name",
                key: "name"
              },
              {
                heading: "username",
                key: "username"
              },
              {
                heading: "email",
                key: "email"
              },
            ]
          } />
        </div>
      </div>

    </>
  );
}

export default App;
