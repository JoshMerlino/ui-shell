import { ReactNode } from "react";
import { MdArrowBack, MdInbox, MdOutbox } from "react-icons/md";
import Button from "./ui-elements/Button";
import Card from "./ui-elements/Card";
import Checkbox from "./ui-elements/Checkbox";
import Drawer, { DrawerDivider, DrawerHeader } from "./ui-elements/Drawer";
import DrawerItem from "./ui-elements/Drawer/DrawerItem";
import Icon from "./ui-elements/Icon";
import InputField from "./ui-elements/InputField";
import Spinner from "./ui-elements/Spinner/";
import Subtitle from "./ui-elements/Subtitle";
import Tooltip from "./ui-elements/Tooltip";

function DemoView({ title, children }: { title?: string; children?: ReactNode }) {
	return (
		<div className="flex gap-4">

			<div className="p-4 flex flex-col gap-2 basis-1/2 bg-gray-100">
				<Subtitle>{ title }</Subtitle>
				<div className="flex gap-4 flex-wrap">
					{children}
				</div>
			</div>
			
			<div className="p-4 flex flex-col gap-2 basis-1/2 dark bg-gray-900">
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
				<Button variant="raised">raised</Button>
				<Button variant="outlined">outlined</Button>
				<Button variant="flat">flat</Button>
				<div className="grow basis-full" />

				<Button color="error">default error</Button>
				<Button color="error"
					variant="raised">raised error</Button>
				<Button color="error"
					variant="outlined">outlined error</Button>
				<Button color="error"
					variant="flat">flat error</Button>
				<div className="grow basis-full" />
				
				<Button color="success">default success</Button>
				<Button color="success"
					variant="raised">raised success</Button>
				<Button color="success"
					variant="outlined">outlined success</Button>
				<Button color="success"
					variant="flat">flat success</Button>
				<div className="grow basis-full" />
				
				<Button color="warn">default warn</Button>
				<Button color="warn"
					variant="raised">raised warn</Button>
				<Button color="warn"
					variant="outlined">outlined warn</Button>
				<Button color="warn"
					variant="flat">flat warn</Button>
			</DemoView>

			<DemoView title="Checkbox">
				<Checkbox>Label</Checkbox>
				<Checkbox defaultChecked>Label (defaultChecked)</Checkbox>
				<Checkbox color="error"
					defaultChecked>Label error</Checkbox>
				<Checkbox color="warn"
					defaultChecked>Label warn</Checkbox>
				<Checkbox color="success"
					defaultChecked>Label success</Checkbox>
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
			
			<DemoView title="Card">
				<Card>This is a card</Card>
				<Card variant="outlined">This is a card (outlined)</Card>
			</DemoView>

			<DemoView title="Spinner">
				<Spinner />
				<Spinner className="stroke-primary" />
			</DemoView>

			<DemoView title="Drawer">
				<div className="relative h-96">
					<Drawer>
						<DrawerHeader>Drawer</DrawerHeader>
						<DrawerItem icon={ MdInbox }>
							Inbox
							<span className="ml-auto px-2">24</span>
						</DrawerItem>
						<DrawerItem active
							icon={ MdOutbox }>
							Outbox
						</DrawerItem>
						<DrawerDivider />
						<DrawerHeader>Drawer</DrawerHeader>
						<DrawerItem icon={ MdInbox }>
							Inbox
							<span className="ml-auto px-2">24</span>
						</DrawerItem>
						<DrawerItem active
							icon={ MdOutbox }>
							Outbox
						</DrawerItem>
					</Drawer>
				</div>
			</DemoView>
			
			<DemoView title="Icons">
				<Icon icon={ MdArrowBack } />
				<Icon icon={ MdArrowBack }>
					<Tooltip>Back</Tooltip>
				</Icon>
			</DemoView>
			
		</main>
	);
}