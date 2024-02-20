export default function Tabs({children, ButtonContainers = 'menu', buttons}){
    // const ButtonContainers = buttonsContainer
    return(<>
        <ButtonContainers>
            {buttons}
        </ButtonContainers>
        {children}
        </>
    );
}