import { useState, useCallback } from 'react';
import {useJqlState} from "./hooks/use-jql-state";
import styles from './App.module.css';
import {useIssuesFromJql} from "./hooks/use-issues-from-jql";
import Modal, { ModalBody, ModalFooter, ModalHeader, ModalTitle, ModalTransition } from '@atlaskit/modal-dialog';
import InlineMessage from '@atlaskit/inline-message';
import Button, {LoadingButton} from "@atlaskit/button";
import { ViewIssueModal } from '@forge/jira-bridge';


function App() {
    const [jql, setJql] = useJqlState();
    const { loading, errors, issues } = useIssuesFromJql(jql);

    const [isOpen, setIsOpen] = useState(false);
	const openModal = useCallback(() => setIsOpen(true), []);
	const closeModal = useCallback(() => setIsOpen(false), []);

    if (jql === undefined) {
        return null;
    }

    if(errors.length > 0){
        console.error("Error fetching issues from JQL");
        console.error(errors);
    }

    const openIssueModal = () => {
        console.log(issues[0].issueKey)
        const viewIssueModal = new ViewIssueModal({
            onClose: () => {
              console.log('ViewIssueModal closed');
            },
            context: {
              issueKey: issues[0].issueKey,
            },
          });
        viewIssueModal.open();
    }
    
    return (
        <div className={styles.app}>
            <h3 className={styles.heading}>Recreating issue view focus flicker bug</h3>
            <InlineMessage appearance="warning" secondaryText="Refresh your page between attempts">
                <p>
                    The flicker sometimes doesn't appear when the issue view modal
                    is opened for the same issue multiple times in a row
                </p>
            </InlineMessage>
            <ol>
                <li>Make sure you access this app within a project that contains issues</li>
                <li>Open up your developer console</li>
                <li className={styles.heading}>Click the Open Modal button</li>
            </ol>

            <div>
                <LoadingButton isLoading={loading} appearance="primary" onClick={openModal}>
                    Open modal
                </LoadingButton>
            </div>

            <ModalTransition>
				{isOpen && (
					<Modal onClose={closeModal}>
						<ModalHeader>
							<ModalTitle>Intermediate Modal</ModalTitle>
						</ModalHeader>
						<ModalBody>
                            <ol start={4}>
                                <li>Open the issue view modal</li>
                                <li>Watch the `onFocus` actions for the buttons within this modal printed out.</li>
                                <li>Pressing escape will either close the issue view modal or the intermediate modal, depending on where the focus currently sits</li>
                            </ol>
						</ModalBody>
						<ModalFooter>
							<Button appearance="subtle" onClick={closeModal} onFocus={() => console.log("Focus grabbed by cancel button")}>
								Cancel
							</Button>
                            <Button appearance="primary" onClick={openIssueModal} onFocus={() => console.log("Focus grabbed by open issue view modal button")}>
                                Open issue view Modal
                            </Button>
                            
						</ModalFooter>
					</Modal>
				)}
			</ModalTransition>
        </div>
    );
}

export default App;
