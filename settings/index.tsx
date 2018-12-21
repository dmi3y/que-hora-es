function mySettings(props: {settings: any}) {
    const { settings } = props
    return (
        <Page>
            <Text>This is simple package, has no settings here. For the feature rich version check "Que hora es? PRO" clockface!</Text>
        </Page>
    );
}

registerSettingsPage(mySettings);
