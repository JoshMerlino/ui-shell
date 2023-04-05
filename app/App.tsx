import { ReactNode } from "react";
import Button from "./ui-elements/Button";
import Subtitle from "./ui-elements/Subtitle";
import Checkbox from "./ui-elements/Checkbox";
import InputField from "./ui-elements/InputField";

function DemoView({ title, children }: { title?: string; children?: ReactNode }) {
	return (
		<div className="flex gap-4">

			<div className="p-4 flex flex-col gap-2 basis-1/2 bg-gray-200">
				<Subtitle>{ title }</Subtitle>
				<div className="flex gap-4 flex-wrap">
					{children}
				</div>
			</div>
			
			<div className="p-4 flex flex-col gap-2 basis-1/2 dark bg-gray-800">
				<Subtitle>{ title } (Dark)</Subtitle>
				<div className="flex gap-4 flex-wrap">
					{children}
				</div>
			</div>

		</div>
	);
}

export default function App() {
	return (
		<main className="m-4 flex flex-col gap-4">
			
			<DemoView title="Buttons">
				<Button>default</Button>
				<Button variant="outlined">outlined</Button>
				<Button variant="flat">flat</Button>
			</DemoView>

			<DemoView title="Checkbox">
				<Checkbox>Label</Checkbox>
				<Checkbox defaultChecked>Label (defaultChecked)</Checkbox>
			</DemoView>
			
			<DemoView title="Input Field">
				<InputField
					hint="This is a hint..."
					label="Label"
					placeholder="Placeholder"
					type="text" />
				<InputField
					placeholder="Placeholder Only"
					type="text" />
				<InputField
					label="Label Only"
					type="text" />
				<InputField
					hint="Hint Only"
					type="text" />
			</DemoView>
			
			<DemoView title="Large Input Field">
				<InputField
					height="large"
					hint="This is a hint..."
					label="Label"
					placeholder="Placeholder"
					type="text" />
				<InputField
					height="large"
					placeholder="Placeholder Only"
					type="text" />
				<InputField
					height="large"
					label="Label Only"
					type="text" />
				<InputField
					height="large"
					hint="Hint Only"
					type="text" />
			</DemoView>
		</main>
	);
}