import React, { useState, useEffect } from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';
import {Item,Button} from '../../components';
import axios from 'axios';
import './list.containers.css';
const List: React.FC = () => { 
const [nom, setNom] = useState('');
const [prenom, setPrenom] = useState('');
  useEffect(() => {
    async function fetchData() {
      const data = await  axios({
        url: '/employes',
        method: 'get',
      });
      setNom(data.data[0].nom);
      setPrenom(data.data[0].prenom);
      console.log(data);
    };

    fetchData();
  });
  
  return(
  <IonContent>
    <IonList>
        <Item nom={nom} prenom={prenom}/>
    </IonList>
</IonContent> )};

export {List}