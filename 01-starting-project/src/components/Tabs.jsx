export default function Tabs({children,buttonsContainer, buttons}){
    const ButtonContainers = buttonsContainer
    return(<>
        <ButtonContainers>
            {buttons}
        </ButtonContainers>
        {children}
        </>
    );
}