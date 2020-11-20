import React, {useState} from 'react';
import { IonButton,IonChip,IonIcon,IonBadge,IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';
import './form.components.css';
import { pin, heart, closeCircle, close, hammer } from 'ionicons/icons';
const Form: React.FC = () => {
  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();
return(
<form action="" method="post">
    <IonItem>
        <IonInput value={text} placeholder="Nom" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
    </IonItem>
    <IonItem>
        <IonInput value={text} placeholder="Prenom" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
    </IonItem>
    <IonItem>
        <IonInput value={text} placeholder="Telephone" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
    </IonItem>
    <IonItem>
        <IonInput value={text} placeholder="Adresse" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
    </IonItem>
    <IonButton href="#">Anchor</IonButton>
</form>
)
};

export {Form};