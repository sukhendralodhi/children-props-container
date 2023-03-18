import { Children } from "react";

const Card = ({ children, title }) => {
    return (
        <div>
            <div className="border-2 border-red-600 my-4 rounded-lg max-w-sm">
            <div className="flex flex-col justify-center items-center py-4 text-center px-2">
                <h1 className="text-2xl text-center mb-4 font-bold">{title}</h1>
                {children}
            </div>

        </div>

        </div>
    );
}

const Profile = () => {
    return (
        <div>
            <Card title="Photo">
                <img className="rounded-full"
                    src="https://i.imgur.com/OKS67lhm.jpg"
                    alt="Akliu Lama"
                    width={70}
                    height={70} />
            </Card>
            <Card title="About">
                <p className="mt-4"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus velit commodi laudantium! Obcaecati, incidunt ullam.</p>
            </Card>
        </div >

    );
}

export default Profile;