import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";

const CommonForm = ({ formControls, formData, setFormData, onSubmit, buttonText, isBtnDisabled }) => {
    const renderInputsByComponentType = (getControlItem) => {
        let element = null;
        const value = formData[getControlItem.name] || ''

        switch (getControlItem.name) {
            case "input":
                element = (
                    <Input
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.name}
                        type={getControlItem.type}
                        value={value}
                        onChange={event =>
                            setFormData({
                                ...formData,
                                [getControlItem.name]: event.target.value,
                            })
                        }
                    />
                )
                break;

            case 'select':
                element = (
                    <Select
                        onValueChange={value =>
                            setFormData({ ...formData, [getControlItem.name]: value })
                        }
                        value={value}
                    >
                        <SelectTrigger className={'w-full'}>
                            <SelectValue placeholder={getControlItem.label} />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                getControlItem.options && getControlItem.options.length > 0
                                    ? getControlItem.options.map((optionItem) => (
                                        <SelectItem key={optionItem.id} value={optionItem.id}>
                                            {optionItem.label}
                                        </SelectItem>
                                    )) : null
                            }
                        </SelectContent>
                    </Select>
                )
                break;

            case 'textarea':
                element = (
                    <Textarea
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.id}
                        value={value}
                        onChange={event =>
                            setFormData({
                                ...formData,
                                [getControlItem.name]: event.target.value,
                            })
                        }
                    />
                )
                break;

            default:
                element = (
                    <Input
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.id}
                        type={getControlItem.type}
                        value={value}
                        onChange={event =>
                            setFormData({
                                ...formData,
                                [getControlItem.name]: event.target.value,
                            })
                        }
                    />
                )
                break;
        }
        return element;
    }

    return (
        <form>
            <div className="flex flex-col gap-3">
                {formControls.map((controlItem) => <div className="grid gap-1.5 w-full" key={controlItem.name}>
                    <Label className={'mb-1'}>{controlItem.label}</Label>
                    {renderInputsByComponentType(controlItem)}
                </div>
                )}
            </div>
            <Button disabled={isBtnDisabled} type="submit" className={'mt-2 w-full'}>
                {buttonText || "Submit"}
            </Button>
        </form>
    )
}

export default CommonForm;