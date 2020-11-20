import React, { useState, useEffect } from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';
import {Item,Button} from '../../components';
import axios from 'axios';
import './list.containers.css';
const List: React.FC = () => { 
const [nom, setNom] = useState('');
const [prenom, setPrenom] = useState('');
const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      let data = await  axios({
        url: '/employes',
        method: 'get',
      });
      const fetched = data.data;
      const itemsToDisplays = fetched.map((data: any) => 
        <Item key={data.nom} nom={data.nom} prenom={data.prenom}/>
      )
      setItems(itemsToDisplays);
    };
    fetchData();
  }, []);
  
  return(
  <IonContent>
    <IonList>
      {items}
    </IonList>
  </IonContent> )};

export {List}