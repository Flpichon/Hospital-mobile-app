import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {List} from '../containers/list';
import {Button} from '../components/button';
import {Modal} from '../containers/modal';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [modalMode, setModalMode] = useState(false); 
  const showModal = () => {
    setModalMode(!modalMode);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Employer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Button toggle={showModal} />
        <Modal toggle={showModal} show={modalMode}/>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Employés</IonTitle>
          </IonToolbar>
        </IonHeader>
        <List/>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
