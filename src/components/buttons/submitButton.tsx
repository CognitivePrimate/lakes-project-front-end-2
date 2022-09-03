interface Props {
    type: any;
    name: any;
    form: any;
}

const SubmitButton = ({type, name, form}: Props) => {

    return(
        <>
        <button type={type} name={name} form={form}>Submit</button>
        </>
    )
}

export default SubmitButton