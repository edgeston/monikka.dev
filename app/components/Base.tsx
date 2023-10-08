import Header from "./Header";
import Paragraph from "./Paragraph";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto p-4">
        <Header title={"Monikka Edgeston"} />
        <div>
          <Paragraph size={"large"} bold={true}>
            Front-End Engineer at Vail Systems
          </Paragraph>
        </div>
        <div>
          <Paragraph size={"medium"} bold={true}>
            I enjoy thinking, code, creating solutions, and helping others.
            Passionate about tech and people.
          </Paragraph>
        </div>
      </div>
    </main>
  );
}
