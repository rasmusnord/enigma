import Form from "./components/Form";
import { m3 } from "./enigma/config";
import styles from "./styles/app.module.css";

export default function App() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <section className={styles.section}>
          <h1 className={styles.logo} data-value="Enigma">
            Enigma
          </h1>
          <p className={styles.preamble}>
            The Enigma machine was a device used for encryption and decryption
            during World War II. It was widely used by the German military to
            encrypt their communications, but was eventually broken by Allied
            codebreakers.
          </p>
          <p>
            This is an implementation of the M3, a specific model used by the
            German Army and the Luftwaffe.{" "}
            <span className={styles.extra}>
              The machine consisted of several key parts, including the
              reflector, rotors, and plugboard.
            </span>
          </p>
          <p className={styles.extra}>
            The rotors were the key component of the encryption process and were
            responsible for scrambling the electrical current in a variety of
            ways. Each rotor had a set of 26 electrical contacts on one side and
            a set of 26 letters on the other side. As the current passed through
            the rotors, it would be scrambled based on the position of the
            letters on the rotor.
          </p>
          <p className={styles.extra}>
            The reflector was a fixed component of the machine that reflected
            the electrical current back through the rotors.
          </p>
          <p className={styles.extra}>
            The plugboard was an additional component that allowed for even more
            encryption by allowing the user to swap letters before they entered
            the rotors.
          </p>
        </section>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <Form machineConfig={m3} />
          <footer className={styles.footer}>
            <a href="https://rasmus.co">Rasmus Nord</a> &bull;{" "}
            <a href="https://github.com/rasmusnord/enigma">Github</a>
          </footer>
        </section>
      </main>
    </div>
  );
}
