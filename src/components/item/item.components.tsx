import React from 'react';
import { IonChip,IonIcon,IonBadge,IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';
import './item.components.css';
import { pin, heart, closeCircle, close, hammer } from 'ionicons/icons';
const Item: React.FC = () => {
return(
  <div>
  <IonItem color="warning">
    <h2>Nom Prenom</h2>
    <IonBadge color="primary">Docteur</IonBadge>
      <IonIcon slot="end" color="danger" size="large" icon={closeCircle} />
      <IonIcon slot="end" color="success" size="large" icon={hammer} />
  </IonItem>
    <IonItem color="warning">
    <h2>Nom Prenom</h2>
    <IonBadge color="primary">Infirmier</IonBadge>
      <IonIcon slot="end" color="danger" size="large" icon={closeCircle} />
      <IonIcon slot="end" color="success" size="large" icon={hammer} />
  </IonItem>
    <IonItem color="warning">
    <h2>Nom Prenom</h2>
    <IonBadge color="primary">Docteur</IonBadge>
      <IonIcon slot="end" color="danger" size="large" icon={closeCircle} />
      <IonIcon slot="end" color="success" size="large" icon={hammer} />
  </IonItem>
  </div>
)
};

export {Item};