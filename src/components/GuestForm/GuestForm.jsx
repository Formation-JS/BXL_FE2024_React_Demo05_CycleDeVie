import { useId } from "react";
import { useForm } from "react-hook-form";

const GuestForm = ({
    onAddGuest = () => { } // Communication avec le composant parent (default : Noop)
}) => {

    //! "useForm" est un "hook" de la librairie "React-Hook-Form"
    //* Son objectif -> Gestion du formulaire
    //* - register : Permet d'enregister l'input dans "React-Hook-Form"
    //* - handleSubmit: Déactive le comportement par default et envoie les données du form (formaté)
    //* - reset : Permet de remettre les valeurs initial dans le formulaire
    //* - setFocus: Permet de manupiler le focus des balises
    //* - formState: Permet d'obtenir l'etat du formulaire (Interaction? Erreurs? Loading? ...)
    const { register, handleSubmit, reset, setFocus, formState: { errors } } = useForm();

    //! Id pour l'accessibilité du formulaire
    const formId = useId();

    //! Gestion des données du formulaire
    //* - Les données sont déjà traité par "React-Hook-Form"
    const handleGuestSubmit = (data) => {
        // Traitement...
        onAddGuest(data);

        // Cleanup
        setFocus('firstname');
        reset();
    };

    //! Rendu
    return (
        <form onSubmit={handleSubmit(handleGuestSubmit)}>
            <div>
                <label htmlFor={formId + '-fname'}>Prénom : </label>
                <input id={formId + '-fname'} type="text" {...register('firstname', { required: true })} />
                {errors.firstname && (
                    <span> Le prénom est obligatoire !</span>
                )}
            </div>
            <div>
                <label htmlFor={formId + '-lname'}>Nom : </label>
                <input id={formId + '-lname'} type="text" {...register('lastname', { required: true })} />
                {errors.lastname && (
                    <span> Le nom est obligatoire !</span>
                )}
            </div>
            <div>
                <button type="submit">Valider</button>
            </div>
        </form>
    );
};

export default GuestForm;
